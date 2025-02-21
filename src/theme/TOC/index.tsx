/**
 * This file wraps the original TOC so we don't need to modify the original code.
 */

import React from 'react';
import TOC from '@theme-original/TOC';
import type { Props } from '@theme/TOC';
import EditThisPage from '@theme-original/EditThisPage';
import { useDoc } from '@docusaurus/theme-common/internal';

interface TOCProps extends Props {
  editUrl: string;
}

export default function TOCWrapper(props: TOCProps): JSX.Element {
  const { metadata } = useDoc();
  const isEmpty = props.toc.length <= 0;

  if (isEmpty) return null;

  return (
    <div className="toc-wrapper">
      <h2>Contents</h2>
      <TOC {...props} />
      <EditThisPage editUrl={metadata.editUrl} />
    </div>
  );
}
