import { cn } from '@/lib/utils'

export default function Logotype({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg
      className={cn('fixed top-1 left-1', className)}
      xmlns="http://www.w3.org/2000/svg"
      width="142px"
      height="48px"
      viewBox="0 0 141 48"
      {...props}
    >
      <defs>
        <linearGradient
          id="a"
          gradientUnits="userSpaceOnUse"
          x1={235.8266}
          y1={540.5296}
          x2={540.6145}
          y2={235.7417}
          gradientTransform="matrix(.08812 -.00018 .00018 .08856 -10.41 -10.313)"
        >
          <stop offset={0} stopColor="#00a595" />
          <stop offset={0.4813} stopColor="#00c959" />
          <stop offset={1} stopColor="#9ce142" />
        </linearGradient>
      </defs>
      <path
        d="M61.992 28.965l-5.543.012c-.98-.008-1.328-.504-1.332-1.375l-.004-1.778c0-.875.348-1.375 1.34-1.383l4.961-.007c.129 0 .23-.106.23-.235V22.75a.235.235 0 00-.234-.234l-4.996.011c-.965-.015-1.309-.515-1.309-1.375l-.003-1.757c-.004-.875.347-1.38 1.351-1.38l5.43-.011c.129 0 .23-.106.23-.234v-1.457a.235.235 0 00-.234-.235l-8.777.02a.23.23 0 00-.23.23l.03 14.348c0 .129.102.23.23.23l8.864-.015c.129 0 .23-.106.23-.235l-.003-1.46a.23.23 0 00-.23-.231zm0 0M74.105 23.688c-.066-.04-.128-.079-.195-.114-.387-.242-.328-.86 0-1.058.375-.254.676-.59.899-1.012.226-.426.34-.945.336-1.559 0-.734-.172-1.394-.516-1.976-.34-.586-.856-1.051-1.543-1.395-.684-.344-1.55-.512-2.598-.512l-5.164.012a.23.23 0 00-.23.23l.027 14.348c0 .13.102.23.23.23l5.419-.007c1.14-.004 2.078-.18 2.812-.531.734-.352 1.277-.828 1.629-1.426.352-.602.523-1.281.523-2.04 0-.765-.156-1.417-.464-1.952-.31-.535-.696-.946-1.165-1.238zm-6.785-4.391c.012-.836.36-1.317 1.317-1.328l1.718-.004c.883-.004 1.54.203 1.965.617.43.414.645.926.645 1.54 0 .476-.117.89-.352 1.241a2.44 2.44 0 01-.957.817c-.398.191-.847.289-1.347.289l-1.649.004c-.969-.004-1.32-.485-1.336-1.325zm5.516 9.031c-.457.418-1.223.625-2.285.629h-1.883c-.965-.004-1.316-.484-1.328-1.324l-.008-2.086c.016-.836.36-1.313 1.309-1.332l1.98-.004c.594 0 1.11.113 1.543.344.434.23.77.543 1.004.93.238.39.355.82.355 1.288a1.988 1.988 0 01-.687 1.555zm0 0M86.375 25.508c-.148-.27-.074-.719.3-.965a3.797 3.797 0 001.477-1.484c.375-.688.559-1.485.559-2.391 0-.91-.191-1.715-.566-2.41-.375-.695-.942-1.242-1.7-1.637-.754-.394-1.703-.59-2.843-.586l-5.024.012a.228.228 0 00-.23.23l.027 14.348c0 .129.105.23.23.23l1.762-.003a.23.23 0 00.23-.23l-.007-4.009c.004-.867.351-1.363 1.344-1.367l1.21-.004c.41.008.688.18.891.52l2.66 4.957c.04.074.118.12.203.12l2.004-.003c.176 0 .285-.191.203-.348zm-1.21-2.504c-.454.207-1.04.312-1.759.316H81.93c-.993 0-1.344-.496-1.348-1.363l-.004-2.621c-.004-.875.348-1.379 1.352-1.379l1.437-.004c.735-.004 1.328.106 1.781.324.454.22.79.535 1 .942.215.41.325.894.325 1.453 0 .555-.102 1.031-.313 1.426-.21.394-.543.699-.996.906zm0 0M98.227 16.16a.231.231 0 00-.22-.152l-2.241.004a.237.237 0 00-.22.152l-5.109 14.36a.233.233 0 00.22.308l1.866-.004a.231.231 0 00.22-.156l.945-2.758c.124-.375.5-1.008 1.296-1.008l3.852-.011c.773 0 1.152.597 1.289.972l.965 2.79a.231.231 0 00.219.155l1.867-.003c.16 0 .273-.16.219-.313zm-.172 8.86l-2.293.003c-.88 0-.836-.734-.727-1.054l1.285-3.758c.145-.523.98-.5 1.157 0l1.312 3.793c.098.336.11 1.012-.734 1.016zm0 0M107.59 15.988l-1.762.004a.228.228 0 00-.23.23l.027 14.348c0 .13.105.23.234.23l1.762-.003a.23.23 0 00.23-.23l-.03-14.348a.228.228 0 00-.231-.23zm0 0M122.723 15.957l-1.739.004a.232.232 0 00-.23.234l.016 8.844c0 .73-.805.8-1.172.297l-6.41-9.258a.232.232 0 00-.192-.101l-1.707.003a.234.234 0 00-.23.235l.027 14.344c0 .128.105.234.234.234l1.762-.004c.125 0 .23-.105.23-.234l-.019-8.825c0-.738.812-.808 1.18-.296l6.398 9.238a.222.222 0 00.192.101l1.69-.003c.13 0 .231-.106.231-.235l-.027-14.344a.238.238 0 00-.234-.234zm0 0M136.203 24.934a3.807 3.807 0 00-1.027-1.2 5.826 5.826 0 00-1.375-.777c-.496-.195-.98-.352-1.45-.469l-1.44-.37a8.93 8.93 0 01-.9-.278 4.428 4.428 0 01-.874-.426 2.13 2.13 0 01-.657-.637 1.645 1.645 0 01-.25-.91c0-.422.122-.797.36-1.125.242-.332.586-.594 1.023-.785.442-.191.965-.285 1.57-.289.844 0 1.544.187 2.102.566.504.34.813.809.926 1.403a.23.23 0 00.226.187l1.704-.004a.233.233 0 00.23-.25 3.616 3.616 0 00-.684-1.863c-.44-.613-1.046-1.098-1.812-1.445-.766-.352-1.648-.528-2.645-.524-.988 0-1.875.18-2.66.535-.789.356-1.41.856-1.87 1.493-.458.636-.688 1.379-.684 2.234 0 1.031.347 1.86 1.035 2.484.691.625 1.625 1.102 2.808 1.422l1.743.473c.527.14 1 .3 1.421.48.418.184.754.414 1 .696.25.277.375.636.375 1.074 0 .484-.14.902-.421 1.266-.286.359-.672.636-1.16.84-.493.199-1.051.3-1.68.304a4.702 4.702 0 01-1.575-.254 2.79 2.79 0 01-1.175-.785 2.208 2.208 0 01-.5-1.137.232.232 0 00-.23-.199l-1.774.004a.233.233 0 00-.23.258c.081.785.327 1.469.738 2.05.46.649 1.09 1.149 1.898 1.5.805.348 1.762.524 2.863.52 1.153 0 2.133-.191 2.946-.57.812-.375 1.433-.89 1.863-1.543.426-.653.64-1.399.637-2.235 0-.664-.133-1.238-.395-1.714zm0 0"
        fill="#383838"
      />
      <path
        d="M12.48 10.848c3.59-2.371 6.782-2.891 9.72-2.258 1.222.043.823-.758.265-1.11a21.406 21.406 0 00-2.242-1.19 18.16 18.16 0 00-1.63-.638l-3.152.856a5.582 5.582 0 00-2.484 1.449L7.871 13.09a5.604 5.604 0 00-1.434 2.5l-.19.73c1.964-2.015 4.007-4 6.233-5.472zm22.137 12.664c-.004 0-.008-.004-.008-.004.786.39 1.52-.016.551-.77-6.265-4.797-12.808-8.863-20.25-6.218-3.87 1.375-7.223 4.03-10.445 6.699-.11.75-.067 1.52.133 2.254l.632 2.355c.004-.008.012-.012.016-.015 3.91-3.047 7.95-6.204 12.922-7.41 5.543-1.344 11.121.398 16.45 3.109zm6.196-2.778c.753.48 1.484.895 2.19 1.246l-1.737-6.46a5.57 5.57 0 00-1.442-2.497L34.72 7.914a5.501 5.501 0 00-2.489-1.437l-6.96-1.86a5.52 5.52 0 00-2.875.004l-1.622.441c4.012 2.2 7.125 4.247 11.891 8.961 4.672 4.63 5.438 5 8.148 6.711zm-21.41 15.621c-3.212-.054-5.958.583-8.485 1.61l2.102 2.105a5.522 5.522 0 002.488 1.438l6.965 1.86c.941.253 1.933.25 2.87-.005l6.958-1.89a5.539 5.539 0 002.484-1.446l.133-.136c-5.129-1.973-10.324-3.45-15.516-3.536zm23.917-12.75c-4.96-2.511-8.207-5.656-9.015-6.464-3.785-3.825-12.575-12.512-21.551-5.875-2.328 1.722-4.629 3.828-6.766 6.035l-.992 3.762c2.899-2.344 5.95-4.547 9.473-5.797 9.226-3.282 16.875 2.75 24.273 8.582 1.367 1.078 2.696 2.125 4.004 3.086l.402-1.528c.125-.476.188-.965.188-1.453-.004-.117-.008-.234-.016-.348zm-25.035-2.714c-4.87 1.18-8.867 4.3-12.734 7.316-.059.047-.121.098-.184.145l1.11 4.113c.093.36.226.703.39 1.031.504-.363 1.008-.734 1.504-1.098 4.2-3.082 8.543-6.27 14.348-6.957 6.3-.742 12.957 1.414 19.308 4.204l.282-1.063c-7.477-4.719-15.844-9.68-24.024-7.691zm4.59 5.875c-3.45.406-6.316 1.73-9.031 3.433-.969.63-.598 1.278.332 1 1.863-.605 3.918-.965 6.289-.957 6.683.024 13.285 1.91 19.75 4.266a5.587 5.587 0 001.086-2.113l.383-1.45c-6.243-2.754-12.758-4.894-18.809-4.18zM7.898 34.94c.008.008.012.012.016.02l1.984 1.98c2.797-1.21 5.864-1.98 9.528-1.918 5.578.094 11.094 1.711 16.515 3.836l3.914-3.949c-6.363-2.308-12.855-4.144-19.39-4.168-5.344-.02-8.938 1.809-12.567 4.2zm0 0"
        fill="url(#a)"
      />
    </svg>
  )
}
