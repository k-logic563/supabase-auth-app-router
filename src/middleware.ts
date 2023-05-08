import { createMiddlewareSupabaseClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

import type { NextRequest } from 'next/server'
import type { Database } from '@src/types/database'

const PROTECT_ROUTES = ['/', '/todo']
// const GUEST_ROUTES = ['/xxx']

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareSupabaseClient<Database>({ req, res })
  const { data: { session } } = await supabase.auth.getSession()
  const isProtectedRoute = PROTECT_ROUTES.includes(req.nextUrl.pathname)
  // ゲストページにアクセスした場合
  // if (GUEST_ROUTES.includes(req.nextUrl.pathname)) {
  //   return res
  // }
  // セッションがない、かつ、認証が必要なページにアクセスした場合
  if (!session && isProtectedRoute) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/auth'
    return NextResponse.redirect(redirectUrl)
  }
  const isAuthRoute = req.nextUrl.pathname === '/auth'
  // セッションがある、かつ、認証ページにアクセスした場合
  if (session && isAuthRoute) {
    const redirectUrl = req.nextUrl.clone()
    redirectUrl.pathname = '/'
    return NextResponse.redirect(redirectUrl)
  }
  return res
}
