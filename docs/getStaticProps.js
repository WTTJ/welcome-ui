const Accordion = require('@welcome-ui/accordion/dist/accordion.doc.json')
const Alert = require('@welcome-ui/alert/dist/alert.doc.json')
const AspectRatio = require('@welcome-ui/aspect-ratio/dist/aspect-ratio.doc.json')
const Avatar = require('@welcome-ui/avatar/dist/avatar.doc.json')
const Badge = require('@welcome-ui/badge/dist/badge.doc.json')
const Box = require('@welcome-ui/box/dist/box.doc.json')
const Breadcrumb = require('@welcome-ui/breadcrumb/dist/breadcrumb.doc.json')
const ButtonGroup = require('@welcome-ui/button-group/dist/button-group.doc.json')
const Button = require('@welcome-ui/button/dist/button.doc.json')
const Card = require('@welcome-ui/card/dist/card.doc.json')
const Checkbox = require('@welcome-ui/checkbox/dist/checkbox.doc.json')
const DatePicker = require('@welcome-ui/date-picker/dist/date-picker.doc.json')
const DateTimePicker = require('@welcome-ui/date-time-picker/dist/date-time-picker.doc.json')
const Drawer = require('@welcome-ui/drawer/dist/drawer.doc.json')
const DropdownMenu = require('@welcome-ui/dropdown-menu/dist/dropdown-menu.doc.json')
const EmojiPicker = require('@welcome-ui/emoji-picker/dist/emoji-picker.doc.json')
const Emoji = require('@welcome-ui/emoji/dist/emoji.doc.json')
const Field = require('@welcome-ui/field/dist/field.doc.json')
const FileDrop = require('@welcome-ui/file-drop/dist/file-drop.doc.json')
const FileUpload = require('@welcome-ui/file-upload/dist/file-upload.doc.json')
const Flex = require('@welcome-ui/flex/dist/flex.doc.json')
const Grid = require('@welcome-ui/grid/dist/grid.doc.json')
const Hint = require('@welcome-ui/hint/dist/hint.doc.json')
const InputText = require('@welcome-ui/input-text/dist/input-text.doc.json')
const Label = require('@welcome-ui/label/dist/label.doc.json')
const Link = require('@welcome-ui/link/dist/link.doc.json')
const Loader = require('@welcome-ui/loader/dist/loader.doc.json')
const MarkdownEditor = require('@welcome-ui/markdown-editor/dist/markdown-editor.doc.json')
const Modal = require('@welcome-ui/modal/dist/modal.doc.json')
const Pagination = require('@welcome-ui/pagination/dist/pagination.doc.json')
const PasswordInput = require('@welcome-ui/password-input/dist/password-input.doc.json')
const Picker = require('@welcome-ui/picker/dist/picker.doc.json')
const Popover = require('@welcome-ui/popover/dist/popover.doc.json')
const RadioGroup = require('@welcome-ui/radio-group/dist/radio-group.doc.json')
const RadioTab = require('@welcome-ui/radio-tab/dist/radio-tab.doc.json')
const Search = require('@welcome-ui/search/dist/search.doc.json')
const Select = require('@welcome-ui/select/dist/select.doc.json')
const Slider = require('@welcome-ui/slider/dist/slider.doc.json')
const Shape = require('@welcome-ui/shape/dist/shape.doc.json')
const Stack = require('@welcome-ui/stack/dist/stack.doc.json')
const Swiper = require('@welcome-ui/swiper/dist/swiper.doc.json')
const Table = require('@welcome-ui/table/dist/table.doc.json')
const Tabs = require('@welcome-ui/tabs/dist/tabs.doc.json')
const Tag = require('@welcome-ui/tag/dist/tag.doc.json')
const Text = require('@welcome-ui/text/dist/text.doc.json')
const Textarea = require('@welcome-ui/textarea/dist/textarea.doc.json')
const TimePicker = require('@welcome-ui/time-picker/dist/time-picker.doc.json')
const Toast = require('@welcome-ui/toast/dist/toast.doc.json')
const Toggle = require('@welcome-ui/toggle/dist/toggle.doc.json')
const Tooltip = require('@welcome-ui/tooltip/dist/tooltip.doc.json')

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
