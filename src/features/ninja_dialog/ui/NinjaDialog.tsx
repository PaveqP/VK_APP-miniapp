import {FC, useRef, useCallback, useEffect} from 'react'
import { Spinner, Textarea, Button } from '@vkontakte/vkui';
import './NinjaDialog.scss'
import { useNinjaQuery } from '../hooks';

const NinjaDialog: FC = () => {

    const textAreaRef = useRef<HTMLTextAreaElement | null>(null)
    const { refetch, isLoading, data } = useNinjaQuery()

    useEffect(() => {
      const textArea = textAreaRef.current
      const value = textArea?.value
      const endOfFirstLetter: any = value?.indexOf(' ')
      textArea?.focus()
      textArea?.setSelectionRange(endOfFirstLetter + 1, endOfFirstLetter)
    }, [data])

    const handleClick = useCallback(async () => {
        await refetch()
    }, [refetch])

  return (
    <section className='responseArea'>
      {isLoading ?
        <Spinner/>
        :
          <div className="responseArea__row">
            <Textarea 
              placeholder="Нажмите на кнопку, чтобы получить ответ" 
              className='responseArea__area' 
              value={data?.fact}
              getRef={textAreaRef}
            />
          </div>
      }
      <Button className='responseArea__button' onClick={handleClick}> Отправить запрос</Button>
    </section>
  )
}

export {NinjaDialog}
