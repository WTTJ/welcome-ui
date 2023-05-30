const Accordion = require('@welcome-ui/accordion/dist/index.doc.json')
const Alert = require('@welcome-ui/alert/dist/index.doc.json')
const AspectRatio = require('@welcome-ui/aspect-ratio/dist/index.doc.json')
const Avatar = require('@welcome-ui/avatar/dist/index.doc.json')
const Badge = require('@welcome-ui/badge/dist/index.doc.json')
const Box = require('@welcome-ui/box/dist/index.doc.json')
const Breadcrumb = require('@welcome-ui/breadcrumb/dist/index.doc.json')
const ButtonGroup = require('@welcome-ui/button-group/dist/index.doc.json')
const Button = require('@welcome-ui/button/dist/index.doc.json')
const Card = require('@welcome-ui/card/dist/index.doc.json')
const Checkbox = require('@welcome-ui/checkbox/dist/index.doc.json')
const DatePicker = require('@welcome-ui/date-picker/dist/index.doc.json')
const DateTimePicker = require('@welcome-ui/date-time-picker/dist/index.doc.json')
const Drawer = require('@welcome-ui/drawer/dist/index.doc.json')
const DropdownMenu = require('@welcome-ui/dropdown-menu/dist/index.doc.json')
const EmojiPicker = require('@welcome-ui/emoji-picker/dist/index.doc.json')
const Emoji = require('@welcome-ui/emoji/dist/index.doc.json')
const Field = require('@welcome-ui/field/dist/index.doc.json')
const FileDrop = require('@welcome-ui/file-drop/dist/index.doc.json')
const FileUpload = require('@welcome-ui/file-upload/dist/index.doc.json')
const Flex = require('@welcome-ui/flex/dist/index.doc.json')
const Grid = require('@welcome-ui/grid/dist/index.doc.json')
const Hint = require('@welcome-ui/hint/dist/index.doc.json')
const InputText = require('@welcome-ui/input-text/dist/index.doc.json')
const Label = require('@welcome-ui/label/dist/index.doc.json')
const Link = require('@welcome-ui/link/dist/index.doc.json')
const Loader = require('@welcome-ui/loader/dist/index.doc.json')
const MarkdownEditor = require('@welcome-ui/markdown-editor/dist/index.doc.json')
const Modal = require('@welcome-ui/modal/dist/index.doc.json')
const Pagination = require('@welcome-ui/pagination/dist/index.doc.json')
const PasswordInput = require('@welcome-ui/password-input/dist/index.doc.json')
const Picker = require('@welcome-ui/picker/dist/index.doc.json')
const Popover = require('@welcome-ui/popover/dist/index.doc.json')
const RadioGroup = require('@welcome-ui/radio-group/dist/index.doc.json')
const RadioTab = require('@welcome-ui/radio-tab/dist/index.doc.json')
const Search = require('@welcome-ui/search/dist/index.doc.json')
const Select = require('@welcome-ui/select/dist/index.doc.json')
const Slider = require('@welcome-ui/slider/dist/index.doc.json')
const Shape = require('@welcome-ui/shape/dist/index.doc.json')
const Stack = require('@welcome-ui/stack/dist/index.doc.json')
const Swiper = require('@welcome-ui/swiper/dist/index.doc.json')
const Table = require('@welcome-ui/table/dist/index.doc.json')
const Tabs = require('@welcome-ui/tabs/dist/index.doc.json')
const Tag = require('@welcome-ui/tag/dist/index.doc.json')
const Text = require('@welcome-ui/text/dist/index.doc.json')
const Textarea = require('@welcome-ui/textarea/dist/index.doc.json')
const TimePicker = require('@welcome-ui/time-picker/dist/index.doc.json')
const Toast = require('@welcome-ui/toast/dist/index.doc.json')
const Toggle = require('@welcome-ui/toggle/dist/index.doc.json')
const Tooltip = require('@welcome-ui/tooltip/dist/index.doc.json')

export async function getStaticProps() {
  return {
    props: {
      propTypes: {
        ...Accordion,
        ...Alert,
        ...AspectRatio,
        ...Avatar,
        ...Badge,
        ...Box,
        ...Breadcrumb,
        ...ButtonGroup,
        ...Button,
        ...Card,
        ...Checkbox,
        ...DatePicker,
        ...DateTimePicker,
        ...Drawer,
        ...DropdownMenu,
        ...EmojiPicker,
        ...Emoji,
        ...Field,
        ...FileDrop,
        ...FileUpload,
        ...Flex,
        ...Grid,
        ...Hint,
        ...InputText,
        ...Label,
        ...Link,
        ...Loader,
        ...MarkdownEditor,
        ...Modal,
        ...Pagination,
        ...PasswordInput,
        ...Picker,
        ...Popover,
        ...RadioGroup,
        ...RadioTab,
        ...Search,
        ...Select,
        ...Shape,
        ...Slider,
        ...Stack,
        ...Swiper,
        ...Table,
        ...Tabs,
        ...Tag,
        ...Text,
        ...Textarea,
        ...TimePicker,
        ...Toast,
        ...Toggle,
        ...Tooltip,
      },
    },
  }
}
