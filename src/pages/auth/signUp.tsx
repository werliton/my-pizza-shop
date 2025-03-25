import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/ui/buttonLink';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';
import { toast } from 'sonner';
import { z } from 'zod';

const signUpForm = z.object({
  restaurantName: z.string().min(3),
  managerName: z.string().min(3),
  phone: z.string().min(11),
  email: z.string().email(),
});

type TSignUpForm = z.infer<typeof signUpForm>;

export const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSignUpForm>();

  const navigate = useNavigate();

  async function handleSignUp(data: TSignUpForm) {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      toast.success('Restaurante cadastrado com sucesso!', {
        action: {
          label: 'Login',
          onClick: () => navigate('/sign-in'),
        },
      });
    } catch {
      toast.error('Erro ao cadastrar restaurante.');
    }
  }
  return (
    <>
      <Helmet title="Cadastro" />

      <div className="p-8">
        <ButtonLink label="Fazer login" to="/sign-in" />
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Criar conta grátias</h1>
            <p className="text-sm text-muted-foreground">Seja um parceiro e comece suas vendas!</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignUp)}>
            <div className="space-y-2">
              <Label htmlFor="restaurantName">Nome do estabelecimento</Label>
              <Input
                type="text"
                id="restaurantName"
                placeholder="Digite o nome do estabelecimento"
                {...register('restaurantName')}
                className="rounded-sm outline-none"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="managerName">Seu Nome</Label>
              <Input type="text" id="managerName" placeholder="Digite seu e-mail" {...register('managerName')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input type="email" id="email" placeholder="Digite seu e-mail" {...register('email')} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Seu Celular</Label>
              <Input type="tel" id="phone" placeholder="Digite seu e-mail" {...register('phone')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full font-semibold">
              Finalizar cadastro
            </Button>

            <p className="px-6 text-center text-sm leading-relaxed text-muted-foreground">
              Ao continuar, você concorda com nossos{' '}
              <a href="#" className="underline underline-offset-4">
                Termos de serviço
              </a>{' '}
              e{' '}
              <a href="#" className="underline underline-offset-4">
                políticas de privacidade
              </a>
              .
            </p>
          </form>
        </div>
      </div>
    </>
  );
};
