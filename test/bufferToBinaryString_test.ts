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

import bufferToBinaryString from "../bufferToBinaryString.ts";
import { assertEquals } from "./test_deps.ts";

Deno.test("normal", () => {
  const view = new Uint8Array(1<<8);
  for (let i = 0; i < view.length; i++) {
    view[i] = i;
  }
  const bs = bufferToBinaryString(view.buffer);

  assertEquals(view.length, bs.length);
  for (let i = 0; i < view.length; i++) {
    assertEquals(bs.charCodeAt(i), view[i]);
  }
});
