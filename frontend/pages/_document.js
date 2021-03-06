import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/*Inter Web Font*/}
                    <link rel="stylesheet" href="https://rsms.me/inter/inter.css"/>

                    {/*Sophia web font*/}
                    <link rel="stylesheet" href="https://use.typekit.net/blg0zww.css"/>
                </Head>
                <body>
                <Main />
                <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument