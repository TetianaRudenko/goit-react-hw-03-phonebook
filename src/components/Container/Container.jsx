import PropTypes from 'prop-types';
import { Container,Title } from "./Container.styled";

function Section({ title, children }) {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {children}
    </Container>
  )
}


Container.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
}

export {Section}