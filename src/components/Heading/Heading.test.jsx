import {renderTheme} from '../../styles/render-theme'
import { Heading } from "."
import { screen } from '@testing-library/react';
import { theme } from '../../styles/theme';
import { NoEmitOnErrorsPlugin } from 'webpack';

describe('<Heading />', () => {
    it('should render with default values', () => {
        const {debug} = renderTheme(<Heading>texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'texto'});

        expect(heading).toHaveStyle({ 
            color: theme.colors.primaryColor,
            'font-size': theme.font.sizes.xhuge,
            'text-transform': 'none',
        });
    });
    it('should render with white color', () => {
        renderTheme(<Heading colorDark={false}>texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'texto'});

        expect(heading).toHaveStyle({ 
            color: theme.colors.white,
        });
    });
    it('should render correct heading sizes', () => {
        
        renderTheme(<Heading size={'small'}>texto</Heading>);
        const heading = screen.getByRole('heading', {name: 'texto'});

        expect(heading).toHaveStyle({ 
            'font-size': theme.font.sizes.medium,
        });
    });
});