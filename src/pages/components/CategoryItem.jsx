import styled from 'styled-components'

// Image and Info have to put on top of img, so it set parent div as 
// relative, and children div as absolute.
function CategoryItem({item}) {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </Info>
    </Container>
  )
}

const Container = styled.div`
  flex: 1;
  height: 70vh;
  margin: 3px;
  position: relative;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`
const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
const Title = styled.h1`
  color:white;
  margin-bottom: 20px;
`
const Button = styled.button`
  border:none;
  padding: 10px;
  background-color: white;
  color:gray;
  cursor: pointer;
  font-weight: 600;
`

export default CategoryItem