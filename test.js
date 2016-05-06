/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import fn from './';

test ( 'expected a string', t => {

  t.throws ( () => { return fn (); }, 'Expected a string, not undefined' );
  t.throws ( () => { return fn ( [] ); }, 'Expected a string, not object' );
  t.throws ( () => { return fn ( {} ); }, 'Expected a string, not object' );

} );

test ( 'check url protocol without slashes', t => {

  t.true ( fn ( 'mailto:info@mail.com' ) );
  t.true ( fn ( 'news:rec.gardens.roses' ) );
  t.true ( fn ( 'xmpp:user@host?message&subject=hi&body=Hello%20World&thread=abc123' ) );
  t.true ( fn ( 'data:image/gif;base64,R0lGODlhyAAiALMDfD0QAADs=' ) );
  t.true ( fn ( 'tel:9008007060' ) );
  t.true ( fn ( 'cid:foo4*foo1@bar.net' ) );
  t.true ( fn ( 'mid:960830.1639@XIson.com/partA.960830.1639@XIson.com' ) );
  t.true ( fn ( 'skype:login?chat' ) );
  t.true ( fn ( 'smsto:8881234567?body=hello!' ) );
  t.true ( fn ( 'bitcoin:19UBzu6Bt4bsx7eTb7eryFWKJ7TF8Bwtnf' ) );

} );

test ( 'check url protocol with slashes', t => {

  t.false ( fn ( 'site.com' ) );
  t.false ( fn ( 'http://admin:pass@site.com' ) );
  t.false ( fn ( '//site.com' ) );
  t.false ( fn ( '//admin:pass@site.com' ) );

  t.false ( fn ( 'ftp://user:password@host:port/path' ) );
  t.false ( fn ( 'http://test.com' ) );
  t.false ( fn ( 'rtmp://mycompany.com/vod/mp4:mycoolvideo.mov' ) );
  t.false ( fn ( 'sftp://root@test.com/home/test/' ) );
  t.false ( fn ( 'rtsp://ip_address/MediaInput/h264' ) );
  t.false ( fn ( 'https://test.com' ) );
  t.false ( fn ( 'gopher://gopher.cc.lehigh.edu' ) );
  t.false ( fn ( 'nntp://news.cs.hut.fi/alt.html/239157' ) );
  t.false ( fn ( 'irc://foobar.org:6665/secret,needkey' ) );
  t.false ( fn ( 'smb://host/share/' ) );
  t.false ( fn ( 'prospero://host:port/hsoname;field=value' ) );
  t.false ( fn ( 'telnet://user:password@host:port/' ) );
  t.false ( fn ( 'wais://vega.lib.ncsu.edu/alawon.src?nren' ) );
  t.false ( fn ( 'file://localhost/etc/fstab' ) );
  t.false ( fn ( 'afp://myserver.mydomain.com/Sharepoint/Folder' ) );
  t.false ( fn ( 'nfs://server:port/path' ) );
  t.false ( fn ( 'TN3270://TN3270site:23/' ) );
  t.false ( fn ( 'z3950://habanero.nhm.ukans.edu/kubirds/search?query=(@attr%201=1%20"falco")' ) );
  t.false ( fn ( 'ed2k://|file|The_Two_Towers-The_Purist_Edit-Trailer.avi|14997504|965c013e991ee246d63d45ea71954c4d|/' ) );
  t.false ( fn ( 'market://details?id=package_name' ) );
  t.false ( fn ( 'steam://install/id' ) );
  t.false ( fn ( 'tg://addstickers?set=vk_nichosi' ) );

} );
