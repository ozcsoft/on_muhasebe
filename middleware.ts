import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/auth/login',
  },
})

export const config = {
  matcher: [
    '/((?!auth|api/auth|api/signup|_next/static|_next/image|favicon|og-image|manifest|sw\\.js|icons|logo-).*)',
  ],
}
