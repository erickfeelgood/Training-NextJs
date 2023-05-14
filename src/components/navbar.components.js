/**
 * @param {Object} props
 * @param {{String|null}} props.logo
 */
import Link from "next/link"

export default function NavbarComponents(props){
    let {logo} = props
    return(
        <header className={'w-full fixed h-20 bg-white'}>

            <div className="mx-auto max-w-[1280px]">{

            logo !== null &&
            <img 
            src={logo}
            alt="logo-page" /> 
            
           
            }
            <nav>
                <ul className="{'flex items-center gap-4}">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li><li>
                        <Link href="/props">Props</Link>
                    </li>
                    <li>
                        <Link href={'/product'}>About Link</Link>
                    </li>

                </ul>
            </nav>
            </div>
        </header>
    )
}