import { FC } from 'react'
import { Collapse } from 'antd'
import './PublicationsPerformed.less'
import { useContentQuery } from '../../../../graphql'
import ReactMarkdown from 'react-markdown'

const { Panel } = Collapse

const PublicationsPerformed: FC = () => {
  const { data } = useContentQuery({
    variables: {
      slug: 'case-studies-publications-performed',
    },
  })
  const content = data?.content

  return (
    <div className='publications-performed'>
      <div className='content'>
        <div className='title'>{content?.title}</div>
        <Collapse bordered={false} expandIconPosition='right'>
          {content?.sections?.map((dropdown, index) => (
            <Panel key={index} header={dropdown.title} className='site-collapse-custom-panel'>
              <div className='dropdown-content'>
                <div className='dropdown-text-content'>
                  <div className='paragraphs'>
                    <p>
                      <ReactMarkdown children={dropdown?.text ?? ''} />
                    </p>
                  </div>
                  <div className='tags'>
                    {dropdown?.extra?.split(',')?.map((tag, tagIndex) => (
                      <div className='tag' key={tagIndex}>
                        {tag}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='dropdown-image-box'>
                  <img src={dropdown?.media?.url} alt='' />
                </div>
              </div>
            </Panel>
          ))}
        </Collapse>
      </div>
    </div>
  )
}

export { PublicationsPerformed }
