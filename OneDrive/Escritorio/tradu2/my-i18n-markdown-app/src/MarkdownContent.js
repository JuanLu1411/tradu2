// src/MarkdownContent.js
import React from 'react';
import { useTranslation } from 'react-i18next';
import { marked } from 'marked';

const MarkdownContent = () => {
  const { t } = useTranslation();

  const markdown = `
    # ${t('welcome')}
    ${t('description')}
  `;

  return <div dangerouslySetInnerHTML={{ __html: marked(markdown) }} />;
};

export default MarkdownContent;
