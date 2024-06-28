
import Section from './Section'
import { smallSphere,stars} from '../assets'
import Heading from './Heading'
import PricingList from './PricingList'
import {LeftLine, RightLine } from './design/Pricing'
const Pricing = () => {
  return (
    <Section className="overflow-hidden " id="Pricing">

        <div className='container relative z-2 '>
            <div className='hidden relative justify-center mb-[6.5rem] lg:flex'>

                <img src={smallSphere} alt=""  className='relative z-1' width={255} height={255}/>
                <div className='absolute top-1/2  left-1/2 w-[60rem] -translate-y-1/2 -translate-x-1/2 pointer-events-none'> 
                  <img src={stars} alt="Starts" className='w-full h-full '  width={950} height={400}/>
                </div>
            </div>
          <Heading tag="Get start with Brainwave" title="Pay once, Use forever." className="text-center"/>
          <PricingList/>
          <LeftLine/>
          <RightLine/>
        </div>
        <div className='flex justify-center mt-10'>

          <a href="/pricing" className='text-xs font-code font-bold tracking-wider uppercase border-b'> See full detail</a>
        </div>
    </Section>
  )
}

export default Pricing
