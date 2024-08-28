import { useForm, Controller } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/ui/card';

export function LoginForm() {
  const { control, handleSubmit, formState: { errors }, setError } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // Ambil data pengguna dari localStorage
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = storedUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (user) {
      // Simpan informasi login ke localStorage
      localStorage.setItem('currentUser', JSON.stringify(user));
      
      navigate('/dashboard');
    } else {
      setError('password', { type: 'manual', message: 'Email atau password salah' });
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <Card className="max-w-sm w-full bg-zinc-950 text-white">
        <CardHeader>
          <CardTitle>Login</CardTitle>
          <CardDescription>
            Masukkan email dan password Anda untuk login
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    {...field}
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    className="text-black"
                    invalid={errors.email && true}
                  />
                )}
              />
              {errors.email && (
                <div className="text-red-500 text-center">
                  {errors.email.message}
                </div>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    {...field}
                    id="password"
                    type="password"
                    placeholder="********"
                    className="text-black"
                    invalid={errors.password && true}
                  />
                )}
              />
              {errors.password && (
                <div className="text-red-500 text-center">
                  {errors.password.message}
                </div>
              )}
            </div>
            <Button type="submit" className="w-full bg-white text-zinc-950">
              Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="mt-4 text-center text-sm text-white">
          <span className="text-white text-center">Belum punya akun? </span>
          <Link to="/register" className="underline">
            Register
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
}
