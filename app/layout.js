import './globals.css'

export const metadata = {
  title: 'Bhuvih HR Solutions',
  description: 'Dynamic HR solutions powered by AI technology, connecting the right talent with the right opportunities across India',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}