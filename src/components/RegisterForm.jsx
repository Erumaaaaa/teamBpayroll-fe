import { useForm, Controller } from 'react-hook-form'; 
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Select from 'react-select';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function RegisterForm() {
  const navigate = useNavigate();

  const roleCategory = [
    { value: 'super-admin', label: 'Super Admin' }, 
    { value: 'admin', label: 'Admin' },
    { value: 'user', label: 'User' },
  ];

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: null,
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ defaultValues });

  const onSubmit = (data) => {
    try {
      const userName = `${data.firstName} ${data.lastName}`;
      const sendData = {
        name: userName,
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        role: data.role.value,
      };
      console.log(sendData);
      
      // Simpan data pengguna di localStorage
      const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
      storedUsers.push(sendData);
      localStorage.setItem('users', JSON.stringify(storedUsers));

      // Arahkan ke halaman login setelah registrasi
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-100">
      <Card className="max-w-sm bg-zinc-950 text-white">
        <CardHeader>
          <CardTitle className="text-xl">Register</CardTitle>
          <CardDescription>
            Masukkan informasi Anda untuk membuat akun
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="grid gap-2">
                <Label htmlFor="first-name" className="text-white">Nama Depan</Label>
                <Controller
                  control={control}
                  name="firstName"
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="text-black"
                      id="first-name"
                      type="text"
                      placeholder="Nama Depan"
                      invalid={errors.firstName && true}
                    />
                  )}
                />
                {errors.firstName && <p className="text-red-500">Nama depan diperlukan.</p>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="last-name" className="text-white">Nama Belakang</Label>
                <Controller
                  control={control}
                  name="lastName"
                  render={({ field }) => (
                    <Input
                      {...field}
                      className="text-black"
                      id="last-name"
                      type="text"
                      placeholder="Nama Belakang"
                      invalid={errors.lastName && true}
                    />
                  )}
                />
                {errors.lastName && <p className="text-red-500">Nama belakang diperlukan.</p>}
              </div>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email" className="text-white">Email</Label>
              <Controller
                control={control}
                name="email"
                render={({ field }) => (
                  <Input
                    {...field}
                    className="text-black"
                    id="email"
                    type="email"
                    placeholder="example@gmail.com"
                    invalid={errors.email && true}
                  />
                )}
              />
              {errors.email && <p className="text-red-500">Email diperlukan.</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="password" className="text-white">Password</Label>
              <Controller
                control={control}
                name="password"
                render={({ field }) => (
                  <Input
                    {...field}
                    className="text-black"
                    id="password"
                    type="password"
                    placeholder="********"
                    invalid={errors.password && true}
                  />
                )}
              />
              {errors.password && <p className="text-red-500">Password diperlukan.</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="confirm-password" className="text-white">Konfirmasi Password</Label>
              <Controller
                control={control}
                name="confirmPassword"
                render={({ field }) => (
                  <Input
                    {...field}
                    className="text-black"
                    id="confirm-password"
                    type="password"
                    placeholder="********"
                    invalid={errors.confirmPassword && true}
                  />
                )}
              />
              {errors.confirmPassword && <p className="text-red-500">Konfirmasi password diperlukan.</p>}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="role" className="text-white">Pilih Role</Label>
              <Controller
                control={control}
                name="role"
                render={({ field }) => (
                  <Select
                    {...field}
                    id="role"
                    className="react-select text-black"
                    classNamePrefix="select"
                    options={roleCategory}
                    onChange={field.onChange} 
                    value={roleCategory.find(option => option.value === field.value)}
                  />
                )}
              />
              {errors.role && <p className="text-red-500">Role diperlukan.</p>}
            </div>
            <Button type="submit" className="w-full bg-white text-zinc-950">
              Buat Akun
            </Button>
          </form>
          <div className="mt-4 text-center text-sm text-white">
            Sudah punya akun?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
