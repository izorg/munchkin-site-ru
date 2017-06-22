import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage, IntlProvider } from 'react-intl';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { BodyContainer } from 'phenomic';

import cn from './style.css';

import Badge from '../../components/Badge';
import Loading from '../../components/Loading';
import LanguageSwitcher from '../../components/LanguageSwitcher';
import { HeadShape } from '../../shapes';
import { getMessages } from '../../i18n';

const Homepage = ({ body, head, isLoading }) => (
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
          href={head.link}
          label={<FormattedMessage id="homepage.try" defaultMessage="Try" />}
          primary
          style={{ marginTop: 24 }}
        />

        <p>
          <Badge />
        </p>
      </div>
    </div>
  </IntlProvider>
);

Homepage.propTypes = {
  body: PropTypes.string,
  head: HeadShape.isRequired,
  isLoading: PropTypes.bool,
};

Homepage.defaultProps = {
  body: '',
  isLoading: false,
};

export default Homepage;
