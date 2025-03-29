import { Button } from '@/components/ui/button';
import { ButtonLink } from '@/components/buttonLink';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Helmet } from 'react-helmet-async';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { signIn } from '@/api/sign-in';

const signInForm = z.object({
  email: z.string().email(),
});

type TSignInForm = z.infer<typeof signInForm>;

export const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TSignInForm>();

  const { mutateAsync: authenticate } = useMutation({
    mutationFn: signIn,
  });

  async function handleSignIn(data: TSignInForm) {
    try {
      await authenticate({ email: data.email });
      toast.success('Enviamos um link de autenticação para seu email.');
    } catch {
      toast.error('Erro ao efetuar login. Tente novamente.');
    }
  }
  return (
    <>
      <Helmet title="Login" />

      <div className="p-8">
        <ButtonLink label="Criar conta" to="/sign-up" />
        <div className="w-[350px] flex flex-col justify-center gap-6">
          <div className="flex flex-col gap-2 text-center">
            <h1 className="text-2xl font-semibold tracking-tight">Acessar painel</h1>
            <p className="text-sm text-muted-foreground">Acompanhe suas vendas pelo painel do parceiro.</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(handleSignIn)}>
            <div className="space-y-2">
              <Label htmlFor="email">Seu E-mail</Label>
              <Input type="email" id="email" placeholder="Digite seu e-mail" {...register('email')} />
            </div>

            <Button disabled={isSubmitting} type="submit" className="w-full">
              Acessar painel
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};
