/*
 * Copyright 2022, alex at staticlibs.net
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default function bufferToBinaryString(buffer: ArrayBuffer): string {
  let result = "";
  let offset = 0;
  while (offset < buffer.byteLength) {
    const length = Math.min(buffer.byteLength - offset, 1<<10);
    const view = new Uint8Array(buffer, offset, length);
    const chunk = String.fromCharCode(...view);
    result += chunk;
    offset += length;
  }
  return result;
}