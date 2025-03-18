import { useTheme } from '@xstyled/styled-components'
import { forwardRef } from 'react'

import type { LogoProps } from '.'

import * as S from './styles'

export const SolutionsSymbol = forwardRef<SVGSVGElement, LogoProps>((props, ref) => {
  const theme = useTheme()

  return (
    <S.Svg role="img" {...props} ref={ref} viewBox="0 0 100 24">
      <title>Welcome to the jungle solutions symbol</title>
      <path
        d="M11.919 12.423c-3.938 0-7.71 1.354-10.173 3.409a10.84 10.84 0 0 1-.727-3.914c0-1.38.258-2.697.727-3.913 2.464 2.054 6.234 3.408 10.173 3.408s7.707-1.354 10.171-3.406c.47 1.214.727 2.533.727 3.91 0 1.379-.258 2.698-.727 3.913-2.463-2.053-6.233-3.407-10.171-3.407Zm7.994 6.892c-1.46-2.174-4.617-5.222-7.995-5.222-3.379 0-6.537 3.05-7.997 5.223-.399-.43-.763-.893-1.089-1.384 1.544-1.99 4.784-4.846 9.086-4.846 4.301 0 7.54 2.858 9.084 4.845-.324.492-.689.954-1.089 1.384Zm-3.262 2.42c-.668-2.736-2.736-5.962-4.733-5.964h-.001C9.92 15.774 7.852 19 7.183 21.735c-.542-.264-1.06-.57-1.548-.915 1.05-2.474 3.37-5.973 6.283-6.053 2.913.08 5.233 3.579 6.281 6.053-.487.345-1.005.651-1.548.915Zm-4.732 1.082c-.921 0-1.815-.115-2.671-.332.333-2.84 1.247-6.033 2.67-6.038 1.423.004 2.338 3.197 2.67 6.038-.853.217-1.748.332-2.67.332ZM3.922 4.52C5.383 6.69 8.54 9.74 11.92 9.74s6.535-3.048 7.996-5.22c.399.43.764.893 1.088 1.383-1.543 1.988-4.784 4.846-9.084 4.846S4.377 7.892 2.832 5.903c.326-.491.69-.954 1.09-1.384ZM7.184 2.1c.669 2.736 2.737 5.961 4.734 5.963 1.998-.002 4.066-3.228 4.734-5.963.543.263 1.062.57 1.55.917-1.05 2.473-3.37 5.97-6.282 6.052-2.913-.081-5.233-3.58-6.283-6.053a11.007 11.007 0 0 1 1.548-.915V2.1ZM9.204.566h.003l-.003.003V.566Zm2.715.452c.92 0 1.816.115 2.67.332-.333 2.841-1.248 6.033-2.67 6.039h-.001c-1.423-.005-2.337-3.197-2.67-6.039.856-.217 1.749-.332 2.67-.332Zm0-1.018C5.347 0 0 5.346 0 11.917c0 6.57 5.347 11.919 11.919 11.919s11.917-5.347 11.917-11.92C23.836 5.346 18.49 0 11.919 0ZM35.528 10.79c-.442-.31-1.01-.639-1.7-.984-.79-.37-1.348-.656-1.678-.862-.329-.202-.559-.402-.688-.599-.133-.196-.197-.462-.197-.796 0-1.016.557-1.523 1.666-1.523.656 0 1.269.334 1.836 1.004.566.67 1.06 1.458 1.479 2.365.024.035.054.051.089.046.035-.006.054-.033.054-.081l-.34-3.474s-.006-.027-.02-.046c-.01-.018-.023-.027-.035-.027l-.447-.089a13.357 13.357 0 0 0-2.562-.27c-1.29 0-2.311.284-3.064.85-.753.568-1.13 1.359-1.13 2.374 0 .896.274 1.633.816 2.214.543.58 1.274 1.082 2.195 1.515.729.345 1.271.637 1.63.869.359.231.613.469.761.707.149.24.225.537.225.896 0 .597-.165 1.026-.492 1.29-.329.262-.726.394-1.19.394-.551 0-1.126-.29-1.728-.877a13.525 13.525 0 0 1-1.72-2.068c-.543-.794-.761-1.136-.653-1.032-.024-.048-.054-.064-.089-.053-.035.01-.054.035-.054.07l.305 4.014c0 .035.019.06.054.073.43.143.988.252 1.674.321a18.17 18.17 0 0 0 1.925.108c.896 0 1.684-.154 2.365-.468.68-.31 1.21-.741 1.585-1.298.375-.556.564-1.19.564-1.909 0-.596-.13-1.109-.386-1.541-.257-.43-.608-.8-1.047-1.112M43.51 16.076c-.196.527-.504.789-.922.789-.572 0-.975-.53-1.201-1.585-.227-1.058-.34-2.309-.34-3.753 0-1.04.094-1.814.286-2.33.192-.512.497-.77.915-.77.573 0 .978.528 1.21 1.578.232 1.05.348 2.291.348 3.725 0 1.04-.098 1.822-.294 2.346h-.001Zm1.52-7.57c-.723-.4-1.592-.599-2.607-.599-.907 0-1.725.211-2.454.627a4.51 4.51 0 0 0-1.72 1.746c-.418.747-.626 1.58-.626 2.5 0 .823.162 1.582.483 2.275.321.694.845 1.255 1.569 1.685.723.429 1.663.645 2.821.645.896 0 1.7-.216 2.419-.645a4.518 4.518 0 0 0 1.684-1.782c.405-.759.61-1.61.61-2.554 0-.837-.18-1.595-.545-2.276-.364-.68-.907-1.22-1.63-1.622M51.328 15.018l-.018-8.76c0-.418.024-.758.073-1.02.011-.048.005-.08-.019-.097-.024-.019-.06-.021-.107-.008l-4.014 1.182c-.049.024-.076.051-.081.08-.006.03.008.063.045.098.67.67 1.005 1.428 1.005 2.276v6.233c0 .311-.048.665-.143 1.059-.095.394-.208.699-.34.912-.024.049-.03.084-.019.108.011.024.04.035.09.035h3.96c.048 0 .08-.016.1-.045.018-.03.008-.062-.027-.1-.335-.49-.502-1.14-.502-1.952h-.003ZM60.62 14.93V8.174c0-.036-.015-.06-.045-.07a.203.203 0 0 0-.116 0l-3.37.912c-.035.014-.056.035-.062.073-.005.035 0 .065.027.089.321.32.483.883.483 1.684v2.813c0 .632-.091 1.11-.278 1.434-.186.321-.45.483-.797.483a.755.755 0 0 1-.664-.348c-.156-.231-.231-.569-.231-1.012V8.177c0-.059-.03-.089-.09-.089-.059 0-1.206.311-3.438.932-.036.013-.06.032-.074.062-.014.03 0 .062.035.1.335.261.502.823.502 1.684v3.474c0 .99.2 1.76.6 2.303.4.543.969.815 1.71.815.621 0 1.172-.178 1.65-.537.477-.358.853-.871 1.128-1.541v1.63c0 .074.035.108.108.108h3.404c.035 0 .059-.011.073-.035.011-.024.011-.054 0-.09-.37-.714-.557-1.403-.557-2.06M67.572 15.71a.784.784 0 0 1-.074.08c-.192.192-.497.287-.915.287-.715 0-1.074-.4-1.074-1.202V9.25h1.793c.073 0 .118-.03.142-.089l.09-.305c.035-.094.005-.142-.09-.142H65.51c0-.443.024-1.237.073-2.384 0-.048-.018-.078-.054-.09a.12.12 0 0 0-.107.02L61.104 9.09c-.048.024-.065.057-.053.1.01.044.043.062.089.062h1.31v5.77c0 .787.207 1.39.625 1.808.418.418 1.04.626 1.863.626.717 0 1.31-.163 1.773-.484.467-.32.794-.71.985-1.164.024-.059.018-.102-.019-.127-.035-.024-.07-.015-.107.027M71.878 15.018l-.019-5.93c0-.42.024-.76.073-1.021.012-.048.006-.08-.018-.1-.024-.019-.06-.021-.108-.009l-4.014 1.183c-.048.024-.076.051-.08.08-.005.03.008.063.045.1.67.67 1.004 1.43 1.004 2.277v3.404c0 .31-.048.664-.142 1.058-.095.394-.208.7-.34.912-.025.049-.03.084-.02.108.012.024.041.035.09.035h3.96c.048 0 .08-.015.1-.045.019-.03.008-.062-.027-.1-.335-.49-.502-1.14-.502-1.952h-.002ZM70.085 7.53c.478 0 .88-.168 1.21-.503.329-.334.49-.74.49-1.217 0-.478-.164-.88-.49-1.21a1.642 1.642 0 0 0-1.21-.491c-.478 0-.886.165-1.218.491a1.63 1.63 0 0 0-.502 1.21c0 .477.167.883.502 1.217.335.335.74.502 1.218.502ZM78.769 16.076c-.197.527-.505.789-.923.789-.572 0-.975-.53-1.201-1.585-.227-1.058-.34-2.309-.34-3.753 0-1.04.094-1.814.286-2.33.192-.512.497-.77.915-.77.573 0 .978.528 1.21 1.578.232 1.05.348 2.291.348 3.725 0 1.04-.098 1.822-.294 2.346h-.001Zm1.52-7.57c-.724-.4-1.593-.599-2.608-.599-.907 0-1.725.211-2.454.627a4.51 4.51 0 0 0-1.72 1.746c-.418.747-.626 1.58-.626 2.5 0 .823.162 1.582.483 2.275.321.694.845 1.255 1.569 1.685.723.429 1.663.645 2.821.645.896 0 1.701-.216 2.419-.645a4.518 4.518 0 0 0 1.684-1.782c.405-.759.61-1.61.61-2.554 0-.837-.18-1.595-.545-2.276-.364-.68-.907-1.22-1.63-1.622M91.762 14.894V11.13c0-1.014-.205-1.795-.618-2.338-.413-.542-.994-.815-1.747-.815-.61 0-1.153.173-1.63.518-.478.346-.862.843-1.147 1.488v-.896c0-.418.024-.758.073-1.02.011-.048.005-.08-.019-.1-.024-.019-.059-.021-.107-.009l-3.474.967c-.098.035-.108.089-.036.162.192.192.318.424.386.7.065.275.1.604.1.984l-.018.824v3.404c0 .31-.049.664-.143 1.058-.095.394-.21.7-.34.913-.025.048-.03.083-.02.107.012.024.042.035.09.035h3.96c.048 0 .078-.01.09-.035.01-.024.005-.06-.02-.107a3.163 3.163 0 0 1-.367-.896 4.235 4.235 0 0 1-.135-1.059l-.019-3.566.019.34c0-.645.095-1.128.287-1.452.192-.32.467-.483.823-.483.287 0 .507.116.664.348.154.232.232.57.232 1.013v3.672c0 .655-.186 1.355-.556 2.095-.014.035-.014.065 0 .089.01.024.03.035.053.035h4.103c.036 0 .06-.011.071-.035.011-.024.011-.054 0-.09-.37-.74-.556-1.438-.556-2.094M98.822 12.019a8.985 8.985 0 0 0-1.307-.688c-.56-.252-.985-.451-1.271-.6a2.62 2.62 0 0 1-.735-.556 1.14 1.14 0 0 1-.305-.797c0-.572.4-.861 1.201-.861.921 0 1.936.777 3.045 2.33a.097.097 0 0 0 .09.027c.034-.006.047-.033.034-.081l-.32-2.438c-.908-.227-1.696-.34-2.366-.34-1.171 0-2.11.235-2.82.708-.711.472-1.067 1.19-1.067 2.16 0 .836.229 1.493.69 1.97.46.478 1.083.892 1.871 1.237l.34.143c.646.286 1.118.548 1.415.78.3.232.448.553.448.958 0 .261-.084.456-.252.583-.166.124-.437.19-.806.19-.478 0-.921-.122-1.326-.368a4.79 4.79 0 0 1-1.128-.958 22.897 22.897 0 0 1-1.237-1.577.086.086 0 0 0-.08-.027c-.03.006-.046.027-.046.063l.124 2.723c.406.192.896.346 1.469.468a8.269 8.269 0 0 0 1.684.178c1.133 0 2.057-.232 2.766-.7.71-.467 1.067-1.2 1.067-2.202 0-.572-.113-1.047-.34-1.425a2.737 2.737 0 0 0-.843-.896"
        fill={theme.colors['neutral-90']}
      />
    </S.Svg>
  )
})
