import { FC } from 'react'
import { Collapse } from 'antd'
import './PublicationsRelated.less'
import { PublicationsDropdown } from '../../../../types'
import DropdownImage1 from './images/dropdown-image-1.svg'
import DropdownImage2 from './images/dropdown-image-2.svg'
import DropdownImage3 from './images/dropdown-image-3.svg'

const { Panel } = Collapse

const publicationsRelatedDropdowns: PublicationsDropdown[] = [
  {
    title: 'Data-centric online ecosystem for digital materials science',
    paragraphs: [
      'Timur Bazhirov',
      'Exabyte Inc.',
      'Materials science is becoming increasingly more reliant on digital data to facilitate progress in the field. Due to a large diversity in its scope, breadth, and depth, organizing the data in a standard way to optimize the speed and creative breadth of the resulting research represents a significant challenge. We outline a modular and extensible ecosystem aimed at facilitating research work performed in an accessible, collaborative, and agile manner, without compromising on fidelity, security, and defensibility of the findings. We discuss the critical components of the ecosystem and explain the implementation of data standards and associated tools. We focus initial attention on modeling and simulations from nanoscale and explain how to add support for other domains. Finally, we discuss example applications or the data convention and future outlook.',
    ],
    tags: ['2019', 'Arxiv.or', 'Team Exabyte.io'],
    image: DropdownImage1,
  },
  {
    title: 'Continuous evaluation of the performance of cloud infrastructure for scientific applications',
    paragraphs: [
      'Mohammad Mohammadi Timur Bazhirov',
      'Exabyte Inc.',
      'Cloud computing recently developed into a viable alternative to on-premises systems for executing high-performance computing (HPC) applications. With the emergence of new vendors and hardware options, there is now a growing need to continuously evaluate the performance of the infrastructure with respect to the most commonly-used simulation workflows. We present an online ecosystem and the corresponding tools aimed at providing a collaborative and repeatable way to assess the performance of the underlying hardware for multiple real-world application-specific benchmark cases. The ecosystem allows for the benchmark results to be stored and shared online in a centrally accessible database in order to facilitate their comparison, traceability, and curation. We include the current up-to-date example results for multiple cloud vendors and explain how to contribute new results and benchmark cases.',
    ],
    tags: ['2018', 'Arxiv.or', 'Team Exabyte.io'],
    image: DropdownImage2,
  },
  {
    title: 'Comparative benchmarking of cloud computing vendors with high performance linpack',
    paragraphs: [
      'Mohammad Mohammadi Timur Bazhirov',
      'Exabyte Inc.',
      'We present a comparative analysis of the maximum performance achieved by the Linpack benchmark on compute intensive hardware publicly available from multiple cloud providers. We study both performance within a single compute node, and speedup for distributed memory calculations with up to 32 nodes or at least 512 computing cores. We distinguish between hyper-threaded and non-hyper-threaded scenarios and estimate the performance per single computing core. We also compare results with a traditional supercomputing system for reference. Our findings provide a way to rank the cloud providers and demonstrate the viability of the cloud for high performance computing applications.',
    ],
    tags: ['2018', 'Proceedings of the HP3C Conference', 'Team Exabyte.io'],
    image: DropdownImage3,
  },
  {
    title: 'Large-scale high-throughput computer-aided discovery of advanced materials using cloud computing',
    paragraphs: [
      'Timur Bazhirov Mohammad Mohammadi Kevin Ding Sergey Barabash',
      'Exabyte Inc. Intermolecular, Inc.',
      'Recent advances in cloud computing made it possible to access large-scale computational resources completely on-demand in a rapid and efficient manner. When combined with high fidelity simulations, they serve as an alternative pathway to enable computational discovery and design of new materials through large-scale high-throughput screening. Here, we present a case study for a cloud platform implemented at Exabyte Inc. We perform calculations to screen lightweight ternary alloys for thermodynamic stability. Due to the lack of experimental data for most such systems, we rely on theoretical approaches based on first-principle pseudopotential density functional theory. We calculate the formation energies for a set of ternary compounds approximated by special quasirandom structures. During an example run we were able to scale to 10,656 CPUs within 7 minutes from the start, and obtain results for 296 compounds within 38 hours. The results indicate that the ultimate formation enthalpy of ternary systems can be negative for some of lightweight alloys, including Li and Mg compounds. We conclude that compared to traditional capital-intensive approach that requires in on-premises hardware resources, cloud computing is agile and cost-effective, yet scalable and delivers similar performance.',
    ],
    tags: ['2017', 'APS March Meeting Abstracts'],
    image: '',
  },
]

const PublicationsRelated: FC = () => {
  return (
    <div className='publications-related'>
      <div className='content'>
        <div className='title'>Publications related to Exabyte.io</div>
        <Collapse bordered={false} expandIconPosition='right'>
          {publicationsRelatedDropdowns.map((dropdown, index) => (
            <Panel key={index} header={dropdown.title} className='site-collapse-custom-panel'>
              <div className='dropdown-content'>
                <div className='dropdown-text-content'>
                  <div className='paragraphs'>
                    {dropdown.paragraphs.map((paragraph, paragraphIndex) => (
                      <p key={paragraphIndex}>{paragraph}</p>
                    ))}
                  </div>
                  <div className='tags'>
                    {dropdown.tags.map((tag, tagIndex) => (
                      <div className='tag' key={tagIndex}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='dropdown-image-box'>
                  <img src={dropdown.image} alt='' />
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  )
}

export { PublicationsRelated }
