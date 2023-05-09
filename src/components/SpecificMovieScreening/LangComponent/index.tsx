import Image from "next/image"

export default function LangComponent ({language, form = ''}: {language: string, form: string}) {
    return (
    <span>
        {form}
        <Image alt={language} src={`/${language}.svg`} width={40} height={15} />
    </span>
    )
}