import { Helmet } from 'react-helmet-async'
import { Hero } from '../components/Home/Hero'
import { Features } from '../components/Home/Features'
import { Testimonials } from '../components/Home/Testimonials'
import { FAQ } from '../components/Home/FAQ'
import { Download } from '../components/Home/Download'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Fortress Vault - Password Manager Offline, Mã Hóa Mạnh</title>
        <meta name="description" content="Trình quản lý mật khẩu cá nhân, offline, mã hóa AES-256-GCM. Bảo vệ mật khẩu của bạn an toàn tuyệt đối." />
      </Helmet>
      <Hero />
      <Features />
      <Testimonials />
      <Download />
      <FAQ />
    </>
  )
}
