// Copyright 2025 Enactic, Inc.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import React, {
  type ReactNode
} from 'react';

export interface BlockImageProps {
  src: string;
  alt: string;
  width: string;
}

export default function BlockImage({ src, alt, width }: BlockImageProps): ReactNode {
  return (
    <img
      src={require(`@site/static/img/${src}`).default}
      alt={alt}
      style={{
        display: 'block',
        margin: '0 auto',
        width: width,
      }}
    />
  );
}
