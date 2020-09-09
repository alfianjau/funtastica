import styled from 'styled-components'
export const MediaSizes = {
  sm: {
    width: '600px',
    value: 600,
  },
  md: {
    width: '960px',
    value: 960,
  },
  lg: {
    width: '1280px',
    value: 1280,
  },
  xl: {
    width: '1920px',
    value: 1920,
  },
}

export const HorizontalPadding = styled.div`
  padding: 0 1rem;
`
export const FullPadding = styled.div`
  @media screen and (max-width: 991px) {
    padding: 0;
  }
  padding: 3rem;
  display: flex;
  flex-wrap: wrap;
`
export const FourthContainer = styled.div`
  width: 25%;
  padding: 1rem;
  @media screen and (max-width: 991px) {
    width: 50%;
  }
  @media screen and (max-width: 767px) {
    width: 100%;
  }
`

export const FullImage = styled.img`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
`

export const ThumbImage = styled.img`
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  width: 100%;
  height: 400px;
  object-fit: cover;
`
