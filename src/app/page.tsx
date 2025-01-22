import Layout from '@/components/layout/Layout'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Rewards from '@/components/home/Rewards'
import Quests from '@/components/home/Quests'
import Explore from '@/components/home/Explore'
import FAQ from '@/components/home/FAQ'

export default function Home() {
  return (
    <Layout>
      <Hero />
      <About />
      <Rewards />
      <Quests />
      <Explore />
      <FAQ />
    </Layout>
  )
} 