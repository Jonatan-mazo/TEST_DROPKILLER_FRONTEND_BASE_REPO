import Image from 'next/image'
import Link from 'next/link'
import LogoDropkiller from '@/assets/images/logoDropkiller_2.png'

export default function NotFound() {
  return (
    <section className='w-dvw h-dvh flex flex-col m-auto bg-dk-background-secondary'>
      <div className='card m-auto flex flex-col bg-dk-background-default border border-dk-border-base-alpha rounded-xl p-10 shadow-sm'>
        <Link href='/' className='imgContainer mb-3 m-auto flex'>
          <Image src={LogoDropkiller} alt="Dropkiller logo" width={0} height={50} className='m-auto my-1' />
        </Link>
        <h2 className='text-[20px] md:text-[30px] m-auto my-0 text-dk-texts font-light text-center'><span className='font-bold'>404</span> | Not Found | No se encontró</h2>
        <p className='text-[16px] m-auto my-0 text-dk-primary font-medium text-center'>No logramos encontrar esta página</p>
        <Link
          className='m-auto text-[16px] mt-5 px-5 py-2 rounded-lg hover:bg-dk-button-primary-hover font-semibold bg-dk-button-primary text-dk-texts-white transition-all'
          href="/"
        >
          Regresar
        </Link>
      </div>
    </section>
  )
}