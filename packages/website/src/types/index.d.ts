declare namespace App {
  interface DataProps<T> {
    data: T
  }
}

type NewsCardType = {
  image: string
  imageMb: string
  title: string
  released: string
  tags: string[]
  paragraphs: string[]
}

type PublicationsDropdown = {
  title: string
  paragraphs: string[]
  tags: string[]
  image: string
}

type CommunitySlide = {
  paragraphs: string[]
}

type CommunityCarousel = {
  title: string
  carouselSlides: CommunitySlide[]
}
