import { FC } from 'react'
import { Col, Row } from 'antd'
import './Vision.less'
import { Background } from './images/Rectangle 253.svg'

type VisionBlock = {
  label: string
  text: string
}

const visionBlocks: VisionBlock[] = [
  {
    label: 'Cloud-native',
    text: `Cloud is the fastest-growing segment of HPC, and for good reasons.
          The vendors have the resources to offer instant access and scalability on the leading current technology.
          They also know security is central to their business and can afford the most reliable solutions, which is why
          companies now run critical functions such as HR, payroll, and finance in the cloud. The cloud service providers'
          lead will only extend over time helping to solve the computational complexity of materials modeling.`,
  },
  {
    label: 'Modular and Accessible',
    text: `Because of the computational complexity, no single software provider offers best-in-class tools across
          all scales and physical-model types. However researchers want the flexibility to use the optimum tool for
          a specific analysis, without having to learn yet another new language and data format. A plug-in modular
          architecture allows researchers to pick the best combination of tools, and get the job done faster. Data
          standards and an intuitive interface control the ever-growing data and cut learning time, making the discipline
          less esoteric.`,
  },
  {
    label: 'Collaborative',
    text: `The way to improve any R&D process is to first define it and allow great minds to participate, build on
          what has been learned already, then provide feedback from the results achieved so the process can be improved.
          This means scientists need to be able to review and comment on each other's work, to define and refine
          workflows, and to engage experimentalists to evaluate the results. Instead of having modelers and
          experimentalists work independently and continue speaking different languages, exchanging information
          regularly lets teams achieve R&D goals faster and more accurately.`,
  },
  {
    label: 'Summary',
    text: `Materials modeling has the potential to speed the discovery of extraordinary new materials for many
          industries and applications. To do so, it must be set free from the ivory tower and in-house supercomputers,
          and become more widely accessible, easier to use, faster, and more precise.`,
  },
]
export const Vision: FC = () => (
  <div className={'vision'}>
    <img src={Background} />
    <div className={'wrapper'}>
      {visionBlocks.map(visionBlock => (
        <article className={'entry'} key={visionBlock.label}>
          <div className={'label'}>{visionBlock.label}</div>
          <div className={'text'}>{visionBlock.text}</div>
        </article>
      ))}
    </div>
  </div>
)
