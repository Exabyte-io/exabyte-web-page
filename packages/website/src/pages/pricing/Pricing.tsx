import { FC } from 'react'
import { Title } from './sections/title/Title'
import { CostStructure } from './sections/cost-structure/CostStructure'
import { ContactUs } from './sections/contact-us/ContactUs'
import { ClusterPricing } from './sections/cluster-pricing/ClusterPricing'
import { Options } from './sections/options/Options'
import { CategoryBased } from './sections/category-based/CategoryBased'
import { ComparisonTable } from './sections/ComparisonTable/ComparisonTable'
// import { Cards } from './sections/cards/Cards'

export const Pricing: FC = () => {
  return (
    <div className='our-vision-page-unique-style'>
      <Title />
      <CostStructure />
      {/*<Cards />*/}
      <ComparisonTable />
      <ContactUs />
      <CategoryBased />
      <ClusterPricing />
      <Options />
    </div>
  )
}
