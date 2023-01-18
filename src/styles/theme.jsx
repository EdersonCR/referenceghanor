import { createTheme } from '@mui/material/styles';
import './index.css';

export const theme = createTheme({
  typography: {
    body: {
      fontFamily: ['IowanOldStyleRoman', 'Times News Roman', 'serif'].join(','),
      fontSize: '1rem'
    }
  }
});

export const colors = {
  backround: "#FFFFFFF3",
  title: '#376167',
  subtitle: '#E9E1D2',
  subsubtitle: '#AA893B',
  border: '#376167',
  anotation: '#FFFFFF',
  transparent: '#FFFFFF00',
  modalBackground: '#F5F5F5',
  modalBackdroop: '#000000DD',
  tableBorder: '#AA893B',
  tableLine: {
    odd: '#F7F3EB',
    even: '#E6DCC4'
  },
  reference: '#833421',
  link: '#CB9D37'
};

export const spaces = {
  standard: 0.5 // rem
}

export const multiplicatorFactor = {
  itemIcon: 95
}

export const fonts = {
  family: {
    title: ['Tormenta20', 'Times News Roman', 'serif'].join(','),
    subtitle: ['IowanOldStyleBold', 'Times News Roman', 'serif'].join(','),
    text: {
      normal: ['IowanOldStyleRoman', 'Times News Roman', 'serif'].join(','),
      italic: ['IowanOldStyleItalic', 'Times News Roman', 'serif'].join(','),
    },
    table: ['SourceSansPro', 'Arial', 'san-serif'].join(','),
  },
  size: {
    title: '2.6rem',
    subtitle: '1.8rem',
    anotation: '1.3rem',
    item: '1.1rem',
    reference: '0.9rem',
    footer: '1rem',
    footerCredits: '0.8rem',
    text: {
      normal: '1rem',
      italic: '1.1rem'
    },
    dialog: {
      normal: '1rem',
      italic: '1.1rem'
    },
    table: {
      normal: '1rem'
    }
  }
};