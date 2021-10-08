import { FC } from 'react'
import { Collapse } from 'antd'
import './PublicationsRelated.less'
import Decoration from './images/decoration.svg'
import DecorationMb from './images/decorationMb.svg'
import { useMediaQuery } from 'react-responsive'
import { useContentQuery } from '../../../../graphql'
import ReactMarkdown from 'react-markdown'

const { Panel } = Collapse

const PublicationsRelated: FC = () => {
  const md = useMediaQuery({ maxWidth: 768 })
  const { data } = useContentQuery({
    variables: {
      slug: 'case-studies-publications-related',
    },
  })
  const content = data?.content

  return (
    <div className='publications-related'>
      <div className='content'>
        <img src={md ? DecorationMb : Decoration} alt='' className='decoration-img' />
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
                    {dropdown?.extra?.split(',')?.map((it, index) => (
                      <div className='tag' key={index}>
                        {it}
                      </div>
                    ))}
                  </div>
                </div>

                <div className='dropdown-image-box'>
                  <img src={dropdown.media?.[0]?.url} alt='' />
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
