import classNames from 'classnames';

const barClass = 'mx-[7px] h-[8px] w-[1px] bg-[#6c5d5d]';
const lineClass = 'block h-[1px] w-full border-none';

function Footer() {
  return (
    <footer className="bg-[#212020] px-[112px] py-[42px] text-sm text-white mo:px-[20px] mo:py-[30px]">
      <p className="border border-x-0 border-t-0 border-[#494747] pb-[14px] mo:hidden">
        Impact Korea
      </p>

      <div className="flex flex-wrap items-center gap-[3px] py-[14px] mo:hidden">
        <dl className="flex">
          <dt>사업자명</dt>
          <dd className="ml-[6px]">(주)임팩트코리아</dd>
        </dl>

        <span className={classNames(barClass)} />

        <dl className="flex">
          <dt>대표자</dt>
          <dd className="ml-[6px]">유준하</dd>
        </dl>

        <span className={classNames(barClass)} />

        <dl className="flex">
          <dt>TEL.</dt>
          <dd className="ml-[6px]">
            <a href="tel:010-0000-0000">010-0000-0000</a>
          </dd>
        </dl>

        <hr className={classNames(lineClass)} />

        <dl className="flex">
          <dt>사업자등록번호</dt>
          <dd className="ml-[6px]">000-00-00000</dd>
        </dl>

        <span className={classNames(barClass)} />

        <dl className="flex">
          <dt>oo업</dt>
        </dl>

        <span className={classNames(barClass)} />

        <dl className="flex">
          <dt>xx업</dt>
        </dl>

        <hr className={classNames(lineClass)} />

        <dl className="flex">
          <dt>주소</dt>
          <dd className="ml-[6px]">
            <address className="not-italic">
              경기도 김포시 구래동 (우: 000000)
            </address>
          </dd>
        </dl>
      </div>

      <p className="text-xs text-gray-400 mo:text-center">
        Copyright © (주)임팩트코리아 All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
