import { Typography, Grid } from '@mui/material';
import { colors, fonts, spaces } from '../../styles/theme';
import Github from '../Github';
import Link from '../Link';
import links from '../../data/links.json';

const footerStyle = {
  container: {
    backgroundColor: colors.title,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  primeryBody: {
    text: {
      fontFamily: fonts.family.table,
      fontSize: fonts.size.footer,
      color: colors.anotation,
      padding: `${spaces.standard}rem`,
      textAlign: 'center' as const,
    }
  },
  secundaryBody: {
    text: {
      fontFamily: fonts.family.table,
      fontSize: fonts.size.footerCredits,
      color: colors.anotation,
      padding: `${spaces.standard}rem`,
      textAlign: 'center' as const,
    },
  },
  link: {
    textDecoration: 'none',
    color: colors.subtitle
  }
}

function Footer() {
  return (
    <Grid container columns={{ xs: 3, sm: 6, md: 12, lg: 12, xl: 12 }} style={footerStyle.container}>
      <Grid size={{ md: 2, xs: 3 }}>
        <Typography style={footerStyle.primeryBody.text}>
          Site desenvolvido por:<br/><Github name={links.developer.creator} repo={links.repo.name}/>
        </Typography>
      </Grid>
      <Grid size={{ md: 3, xs: 3 }}>
        <Typography style={footerStyle.primeryBody.text}>
          <Link link={links.t20}/> pertence a <Link link={links.jambo}/>. Todos os direitos são reservados à editora.
        </Typography>
      </Grid>
      <Grid size={{ md: 3, xs: 3 }}>
        <Typography style={footerStyle.secundaryBody.text}>
          Sugestões, melhorias e erros, envie um e-mail para <Link link={links.mail}/>.
        </Typography>
      </Grid>
      <Grid size={{ md: 3, xs: 3 }}>
        <Typography style={footerStyle.secundaryBody.text}>
          Ícones feitos por {links.icons.creators.slice(0,-1).join(', ').concat(' e ', links.icons.creators.slice(-1)[0])}. Disponíveis em <Link link={links.icons}/>.
        </Typography>
      </Grid>
    </Grid>
  );
}

export default Footer;
