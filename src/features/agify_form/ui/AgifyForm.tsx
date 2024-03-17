import { useRef, useState, useCallback, FC } from 'react'
import { SubmitHandler, Controller } from "react-hook-form"
import { useQueryClient } from '@tanstack/react-query';
import { Button, FormItem, Input, CardGrid, Card, Spinner } from '@vkontakte/vkui';
import { usePersonAgeForm, usePersonAgeQuery } from '../hooks';
import '@vkontakte/vkui/dist/vkui.css';
import './AgifyForm.scss'

type FormValues = {
    name: string
}

const AgifyForm: FC = () => {

    const {control, handleSubmit, watch} = usePersonAgeForm()
    const [prevName, setPrevName] = useState<string>('')
    const currentName = watch('name')
    const {refetch, data, isLoading} = usePersonAgeQuery(currentName)
    const queryClient = useQueryClient()
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    const onSubmit: SubmitHandler<FormValues> = useCallback(async () => {
        queryClient.cancelQueries({queryKey: ['person']})
        if (currentName !== prevName) await refetch()
        setPrevName(currentName)
    }, [prevName, refetch, currentName, queryClient]);

    const onSubmitWithDelay = useCallback((e: { preventDefault: () => void; }) => {
        e?.preventDefault()
        clearTimeout(timeoutRef.current!);
        handleSubmit(onSubmit)();
    }, [handleSubmit, onSubmit]);

    const handleChange = useCallback(() => {
        clearTimeout(timeoutRef.current!); 
        timeoutRef.current = setTimeout(() => {
            handleSubmit(onSubmit)(); 
        }, 3000);
    }, [handleSubmit, onSubmit]);
  
    return (
        <section className='agifyForm'> 
            <form onSubmit={onSubmitWithDelay} className='agifyForm__form'> 
                <FormItem top="Имя">
                    <Controller
                        name='name'
                        control={control}
                        render={({field, fieldState}) => (
                            <>
                                <Input 
                                    id='name'
                                    value={field.value}
                                    onChange={(e) => {
                                        field.onChange(e.target.value)
                                    }}
                                    className='agifyForm__input' 
                                    onKeyUp={handleChange} 
                                    placeholder={"Введите имя"} 
                                />
                                {fieldState.error && (
                                    <div className='agifyForm__warning'>
                                        {fieldState.error.message}
                                    </div>
                                )
                                }
                            </>
                        )}
                    />
                </FormItem>
                <FormItem>
                    <CardGrid size="l">
                        <Card mode="shadow">
                            <div className='agifyForm__response'>
                                {isLoading ?
                                    <Spinner/>
                                    :
                                    prevName ?
                                    <>возраст {prevName}: <p className='agifyForm__age'>{data?.age ? data?.age : 'не найден'}</p></>
                                    :
                                    <p>Отправьте запрос или ожидайте 3 секунды после ввода имени</p>
                                }
                                
                            </div>
                        </Card>
                    </CardGrid>
                </FormItem>
                <FormItem>
                    <Button type='submit' className='agifyForm__button'>Отправить запрос</Button>
                </FormItem>
            </form>
        </section>
    )
}

export {AgifyForm}