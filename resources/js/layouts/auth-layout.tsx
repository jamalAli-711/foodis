import AuthLayoutTemplate from '@/layouts/auth/auth-simple-layout';

export default function AuthLayout({className, children, title, description, ...props  }: { children: React.ReactNode; title: string; description: string }) {
    return (
        <AuthLayoutTemplate className={className}  title={title} description={description} {...props}>
            {children}
        </AuthLayoutTemplate>
    );
}
