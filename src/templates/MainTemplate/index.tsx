import '../../styles/theme.css';
import '../../styles/global.css';
import { Container } from '../../components/Conteiner';
import { Logo } from '../../components/Logo';
import { Menu } from '../../components/Menu';
import { CountDown } from '../../components/CountDown';
import { MainForm } from '../../components/MainForm';
import { Footer } from '../../components/Footer';

export function MainTemplate() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Menu />
      </Container>
      <Container>
        <CountDown />
      </Container>
      <Container>
        <MainForm />
      </Container>
      <Container>
        <Footer />
      </Container>
    </>
  );
}

