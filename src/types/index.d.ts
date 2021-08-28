declare namespace App {
  interface DataProps<T> {
    data: T
  }
}

export type NewsCard = {
  image: string
  title: string
  released: string
  tags: string[]
  paragraphs: string[]
}

export type PublicationsDropdown = {
  title: string
  paragraphs: string[]
  tags: string[]
  image: string
}

type communitySlide = {
  paragraphs: string[]
}

export type communityCarousel = {
  title: string
  carouselSlides: communitySlide[]
}
