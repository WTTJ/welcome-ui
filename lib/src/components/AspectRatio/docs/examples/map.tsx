import { AspectRatio } from '@/components/AspectRatio'

const Example = () => {
  return (
    <AspectRatio ratio="video">
      <iframe
        allowFullScreen
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.5449632344926!2d2.340616916425052!3d48.86688687928823!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e3d283631cf%3A0xea76ccc710fa2440!2sRue%20du%20Mail%2C%2075002%20Paris!5e0!3m2!1sfr!2sfr!4v1646929709530!5m2!1sfr!2sfr"
      />
    </AspectRatio>
  )
}

export default Example
