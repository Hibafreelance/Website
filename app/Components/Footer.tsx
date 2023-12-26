import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '../Constants/index'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {

  
  return (
    <footer className="flexCenter mt-24 mb-10" id='footer'>
      <div className="padding-container max-container flex w-full flex-col gap-5">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image src="/logo.png" alt="logo" width={74} height={30}/>
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns,a) => (
              <FooterColumn key={a} title={columns.title}>
                <ul className="regular-14 flex flex-col gap-4 text-gray-30">
                  {columns.links.map((link) => (
                    <Link href={link.url} key={link.text}>
                      {link.text}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href={link.url}
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                    target={link.target}
                  >
                    <p className="whitespace-nowrap">
                      {link.label}:
                    </p>
                    <p className="whitespace-nowrap text-blue-900">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>

            <div className="flex flex-col gap-5">
              <FooterColumn title={SOCIALS.title}>
                <ul className="regular-14 flex gap-4 text-gray-30">
                  {SOCIALS.links.map((link) => (
                    <Link href={link.url} key={link.src} target='_blank'>
                      <Image src={link.src} alt="logo" width={32} height={32} />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>

        <div className="border bg-gray-20" />
        <p className="regular-14 w-full text-center text-gray-30 mb-5">2024 Hiba Company | All rights reserved</p>
      </div>
    </footer>
  )
}

type FooterColumnProps = {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="bold-18 whitespace-nowrap">{title}</h4>
      {children}
    </div>
  )
}

export default Footer