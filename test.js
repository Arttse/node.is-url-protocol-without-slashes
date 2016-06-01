/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from './';

test ( 'expected a string', t => {

  t.throws ( () => { return m (); }, 'Expected a string, not undefined' );
  t.throws ( () => { return m ( [] ); }, 'Expected a string, not object' );
  t.throws ( () => { return m ( {} ); }, 'Expected a string, not object' );

} );

test ( 'check url protocol without slashes', t => {

  t.true ( m ( 'mailto:info@mail.com' ) );
  t.true ( m ( 'news:rec.gardens.roses' ) );
  t.true ( m ( 'xmpp:user@host?message&subject=hi&body=Hello%20World&thread=abc123' ) );
  t.true ( m ( 'data:image/gif;base64,R0lGODlhyAAiALMDfD0QAADs=' ) );
  t.true ( m ( 'tel:9008007060' ) );
  t.true ( m ( 'cid:foo4*foo1@bar.net' ) );
  t.true ( m ( 'mid:960830.1639@XIson.com/partA.960830.1639@XIson.com' ) );
  t.true ( m ( 'skype:login?chat' ) );
  t.true ( m ( 'smsto:8881234567?body=hello!' ) );
  t.true ( m ( 'bitcoin:19UBzu6Bt4bsx7eTb7eryFWKJ7TF8Bwtnf' ) );

} );

test ( 'check url protocol with slashes', t => {

  t.false ( m ( 'site.com' ) );
  t.false ( m ( 'http://admin:pass@site.com' ) );
  t.false ( m ( '//site.com' ) );
  t.false ( m ( '//admin:pass@site.com' ) );

  t.false ( m ( 'ftp://user:password@host:port/path' ) );
  t.false ( m ( 'http://test.com' ) );
  t.false ( m ( 'rtmp://mycompany.com/vod/mp4:mycoolvideo.mov' ) );
  t.false ( m ( 'sftp://root@test.com/home/test/' ) );
  t.false ( m ( 'rtsp://ip_address/MediaInput/h264' ) );
  t.false ( m ( 'https://test.com' ) );
  t.false ( m ( 'gopher://gopher.cc.lehigh.edu' ) );
  t.false ( m ( 'nntp://news.cs.hut.fi/alt.html/239157' ) );
  t.false ( m ( 'irc://foobar.org:6665/secret,needkey' ) );
  t.false ( m ( 'smb://host/share/' ) );
  t.false ( m ( 'prospero://host:port/hsoname;field=value' ) );
  t.false ( m ( 'telnet://user:password@host:port/' ) );
  t.false ( m ( 'wais://vega.lib.ncsu.edu/alawon.src?nren' ) );
  t.false ( m ( 'file://localhost/etc/fstab' ) );
  t.false ( m ( 'afp://myserver.mydomain.com/Sharepoint/Folder' ) );
  t.false ( m ( 'nfs://server:port/path' ) );
  t.false ( m ( 'TN3270://TN3270site:23/' ) );
  t.false ( m ( 'z3950://habanero.nhm.ukans.edu/kubirds/search?query=(@attr%201=1%20"falco")' ) );
  t.false ( m ( 'ed2k://|file|The_Two_Towers-The_Purist_Edit-Trailer.avi|14997504|965c013e991ee246d63d45ea71954c4d|/' ) );
  t.false ( m ( 'market://details?id=package_name' ) );
  t.false ( m ( 'steam://install/id' ) );
  t.false ( m ( 'tg://addstickers?set=vk_nichosi' ) );

} );
