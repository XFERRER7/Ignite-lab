import { isPast, format } from 'date-fns'
import { CheckCircle, Lock } from 'phosphor-react'
import ptBR from 'date-fns/locale/pt-BR'

interface LessonProps {
  title: string,
  slug: string,
  avaliableAt: Date,
  type: 'live' | 'class'
}


export const Lesson = (props: LessonProps) => {

  
  const isAvaliable = isPast(props.avaliableAt);
  const isAvaliabreFormatted = format(props.avaliableAt, "EEEE' • ' 'de' MMMM '•' K'h' mm   ") 

  return (
    <a href='#' className='flex flex-col gap-2'>

      <span className='text-gray-300'>
        {isAvaliabreFormatted}
      </span>

      <div className='border border-gray-500 p-4'>
        <header className='flex items-center justify-between'>

          {
            isAvaliable ?
              <span className='text-sm text-blue-500 font-medium flex items-center gap-2'>
                <CheckCircle size={20} />
                Conteúdo liberado
              </span>
              :
              <span className='text-sm text-orange-500 font-medium flex items-center gap-2'>
                <Lock size={20} />
                Em breve
              </span>
          }



          <span className='text-xs rounded border text-white border-green-300 font-bold px-[2px] py-[0.125rem]'>
            {
              props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'
            }
          </span>

        </header>

        <span className='block mt-5 text-gray-200'>
          {props.title}
        </span>

      </div>
    </a>
  )
}
