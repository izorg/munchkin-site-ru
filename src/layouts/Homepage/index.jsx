import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { BodyContainer } from 'phenomic';

import cn from './style.css';

import Loading from '../../components/Loading/index';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { HeadShape } from '../../shapes';
import { getMessages } from '../../i18n';

const Homepage = ({ body, children, head, isLoading }) => (
  <IntlProvider locale={head.lang} messages={getMessages(head.lang)}>
    <div>
      <Helmet>
        <html lang={head.lang} />
        <title>{head.title}</title>
      </Helmet>
      <div className={cn.languageSwitcher}>
        <LanguageSwitcher language={head.lang} />
      </div>
      <div className={cn.main}>
        <h1 className={cn.title}>{head.title}</h1>

        <div>
          {
            isLoading
              ? <Loading />
              : <BodyContainer>{body}</BodyContainer>
          }
        </div>

        <RaisedButton
          href="https://web.allmunchkins.com"
          label={<FormattedMessage id="homepage.try" defaultMessage="Try" />}
          primary
          rel="noopener noreferrer"
          style={{ marginTop: 24 }}
        />

        {children}
      </div>
    </div>
  </IntlProvider>
);

Homepage.propTypes = {
  body: PropTypes.string,
  children: PropTypes.node,
  head: HeadShape.isRequired,
  isLoading: PropTypes.bool,
};

Homepage.defaultProps = {
  body: '',
  children: null,
  isLoading: false,
};

export default Homepage;
