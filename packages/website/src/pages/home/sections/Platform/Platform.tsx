import { FC, useEffect, useState } from 'react'
import { Layout, Typography } from 'antd'
import PlatformBgMb from './images/platform-bg-mb.svg'
import PlatformBgLg from './images/platform-bg-lg.svg'
import { useMediaQuery } from 'react-responsive'
import { ActionButton } from '../../../../components/button/ActionButton'
import { useContentQuery } from '../../../../graphql'
import $ from 'jquery'
import './Platform.less'

const Platform: FC = () => {
  const md = useMediaQuery({ minWidth: 768 })

  const { data } = useContentQuery({
    variables: {
      slug: 'main-platform',
    },
  })
  const content = data?.content

  //JQUERY CODE

  // SETTINGS
  const PLATFORM_HOST_AND_PORT = 'platform.exabyte.io'
  //const PLATFORM_HOST_AND_PORT = "localhost:4000";  // uncomment for local development
  const REST_API_URL = `https://${PLATFORM_HOST_AND_PORT}/api/2018-10-01`

  // FUNCTIONS

  const animateNumberCountBySelector = (count, selector) => {
    $({ countNum: $(selector).html() }).animate(
      { countNum: count },
      {
        duration: 2000,
        easing: 'swing',
        step: function () {
          const count = parseFloat(Math.floor(this.countNum)).toLocaleString()
          $(selector).html(count + '+')
        },
        complete: function () {
          const count = parseFloat(this.countNum).toLocaleString()
          console.log(count)
          $(selector).html(this.countNum.toLocaleString())
        },
      },
    )
  }

  const getTotalEntityCounts = () => {
    $.ajax({
      url: `${REST_API_URL}/other/entity-counts`,
    }).then(function (data) {
      const array = data.data
      const getCountByName = name => (array.find(o => o.name === name) || { count: 'N/A' }).count
      animateNumberCountBySelector(getCountByName('Jobs'), '#total-count-jobs h2')
      animateNumberCountBySelector(getCountByName('Materials'), '#total-count-materials h2')
      animateNumberCountBySelector(getCountByName('Workflows'), '#total-count-workflows h2')
      animateNumberCountBySelector(getCountByName('Properties'), '#total-count-properties h2')
    })
  }

  //JQUERY CODE

  const [visible, setVisible] = useState(false)

  //target visible
  // Получаем нужный элемент
  const element = document.querySelector('#total-entity-counts')

  const Visible = function (target) {
    // Все позиции элемента
    const targetPosition = {
        top: window.pageYOffset + target.getBoundingClientRect().top,
        left: window.pageXOffset + target.getBoundingClientRect().left,
        right: window.pageXOffset + target.getBoundingClientRect().right,
        bottom: window.pageYOffset + target.getBoundingClientRect().bottom,
      },
      // Получаем позиции окна
      windowPosition = {
        top: window.pageYOffset,
        left: window.pageXOffset,
        right: window.pageXOffset + document.documentElement.clientWidth,
        bottom: window.pageYOffset + document.documentElement.clientHeight,
      }

    if (
      targetPosition.bottom > windowPosition.top && // Если позиция нижней части элемента больше позиции верхней чайти окна, то элемент виден сверху
      targetPosition.top < windowPosition.bottom && // Если позиция верхней части элемента меньше позиции нижней чайти окна, то элемент виден снизу
      targetPosition.right > windowPosition.left && // Если позиция правой стороны элемента больше позиции левой части окна, то элемент виден слева
      targetPosition.left < windowPosition.right
    ) {
      // Если позиция левой стороны элемента меньше позиции правой чайти окна, то элемент виден справа
      // Если элемент полностью видно, то запускаем следующий код
      console.clear()
      setVisible(true)
    } else {
      // Если элемент не видно, то запускаем этот код
      console.clear()
      setVisible(false)
    }
  }

  // Запускаем функцию при прокрутке страницы
  window.addEventListener('scroll', function () {
    Visible(element)
  })

  useEffect(() => {
    visible && getTotalEntityCounts()
  }, [visible])

  return (
    <Layout className={'platform-wrapper'}>
      <img src={!md ? PlatformBgMb : PlatformBgLg} alt={'Matera'} className={'home-hero-img'} />
      <div className={'platform-wrapper-content'}>
        <Typography.Paragraph className={'platform-wrapper-content-title'}>{content?.title}</Typography.Paragraph>
        <Typography.Paragraph className={'platform-wrapper-content-description'}>{content?.description}</Typography.Paragraph>
      </div>
      <div className={'platform-wrapper-button'}>
        <ul className={'cards-list'} id='total-entity-counts'>
          {content?.sections?.map((value, index) => (
            <li className={'cards-list-item'} id={value.slug} key={index}>
              <h2 className={'number'}>0</h2>
              <p className={'description'}>{value.subTitle}</p>
            </li>
          ))}
        </ul>
        <ActionButton title={content?.button?.link?.text} type={'default'} size={'medium'} src={content?.button?.link?.url} />
      </div>
    </Layout>
  )
}

export { Platform }
