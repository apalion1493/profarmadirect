const options = require('./config') //options from config.js

const allPlugins = {
    typography: require('@tailwindcss/typography'),
    forms: require('@tailwindcss/forms'),
    containerQueries: require('@tailwindcss/container-queries'),
}

const plugins = Object.keys(allPlugins)
    .filter(k => options.plugins[k])
    .map(k => {
        if (k in options.plugins && options.plugins[k]) {
            return allPlugins[k]
        }
    })

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{html,js,php}'],
    darkMode: 'class',
    theme: {
        backgroundSize: {
            auto: 'auto',
            cover: 'cover',
            contain: 'contain',
            '100%': '100%',
            '100-auto': '100% auto',
        },
        fontFamily: {
            sans: ['Montserrat', 'sans-serif'],
        },
        fontSize: {
            none: ['0px', '0px'],
            base: ['18px', '130%'],
            h1: ['70px', '100%'],
            h2: ['48px', '120%'],
            h3: ['40px', '130%'],
            h4: ['32px', '130%'],
            h1Mob: ['56px', '120%'],
            h2Mob: ['30px', '120%'],
            Top1: ['24px', '130%'],
            Top2: ['22px', '130%'],
            Top3: ['20px', '130%'],
            Top4: ['36px', '100%'],
            body: ['16px', '130%'],
            body2: ['14px', '120%'],
            body3: ['8px', '120%'],
            body4: ['12px', '120%'],
        },
        screens: {
            '2xl': {max: '1549px'},
            xl: {max: '1344px'},
            lg: {max: '1023px'},
            md: {max: '767px'},
            sm: {max: '639px'},
            sm2: {max: '480px'},
            sm3: {max: '360px'},

            minsm: {min: '640px'},
            minmd: {min: '768px'},
            minlg: {min: '1024px'},
            minxl: {min: '1345px'},
            min2xl: {min: '1550px'},
        },
        container: {
            center: true,
            padding: {
                sm: '2rem',
                lg: '4rem',
                xl: '5rem',
                '2xl': '6rem',
            },
        },
        extend: {
            lineHeight: {
                '100': '100%'
            },
            boxShadow: {
                '3xl': '0px 1px 5px 1px rgba(61, 101, 255, 0.12)',
                '4xl': '0px 1px 8px 1px rgba(5, 9, 62, 0.09)',
                '5xl': '0px 1px 9px 2px rgba(61, 101, 255, 0.12)',
                '6xl': '0px 1px 5px 1px rgba(61, 101, 255, 0.12)',
                '7xl': '0px 1px 18px 1px rgba(5, 9, 62, 0.07);',
            },
            borderRadius: {
                '4xl': '32px',
                '5xl': '40px',
                '6xl': '20px',
                '7xl': '8px',
            },
            colors: {
                transparent: 'transparent',
                pageBg: '#F9FBFF',
                blue10: '#3D65FF1A',
                blue20: '#3D65FF33',
                blue100: '#3D65FF',
                DarkBlue10: '#05093E1A',
                DarkBlue30: '#05093E4D',
                DarkBlue100: '#060B52',
                DarkBlue50: '#05093E80',
                Grey: '#BFC6D6',
                LagunaBlue: '#32CDD7',
                LightBlue: '#EFF6FF',
                SkyBlue: '#80E0FF',
                White20: '#FFFFFF33',
                Backgroung: '#F9FBFF',
                Error: '#F25F5F',
                WhiteV2: '#FEEFEE',
                RedV2: '#C0000033',
                RedV3: '#CB0000',
                Blue40: '#3D65FF66',
            },
            letterSpacing: {
                '018': '-0.18px'
            },
            padding: {
                '1/4': '25%',
                '3/4': '75%',
                '1/5': '20%',
                '2/5': '40%',
                '3/5': '60%',
                '4/5': '80%',
                '1/6': '16.666667%',
                '5/6': '83.333333%',
                '1/24': '4.166667%',
                '2/24': '8.333333%',
                '3/24': '12.5%',
                '4/24': '16.666667%',
                '5/24': '20.833333%',
                '6/24': '25%',
                '7/24': '29.166667%',
                '8/24': '33.333333%',
                '2.5': '10px',
            },
        },
    },
    plugins: plugins,
}
