export default function ({ route, redirect }) {
  if (route.fullPath == '/test-redirect') {
    return redirect('/')
  }
}
