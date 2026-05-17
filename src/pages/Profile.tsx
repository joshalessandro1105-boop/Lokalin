import { UserCircle2, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

const Profile = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      <main className="container mx-auto px-4 py-16">
        <section className="mx-auto max-w-3xl rounded-3xl border border-border bg-card/95 p-8 shadow-xl shadow-black/5 backdrop-blur-xl">
          <div className="mb-8 flex items-center gap-4 rounded-3xl bg-primary/5 px-6 py-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
              <UserCircle2 className="h-8 w-8" />
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.24em] text-primary">Profil Pengguna</p>
              <h1 className="mt-2 text-3xl font-bold text-foreground">Halo, Selamat Datang!</h1>
            </div>
          </div>

          <div className="grid gap-8 rounded-3xl border border-border bg-background/80 p-6 text-sm shadow-sm">
            <div className="grid gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Nama</p>
              <p className="text-base font-semibold text-foreground">Pengguna Lokal</p>
            </div>
            <div className="grid gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Email</p>
              <p className="text-base font-semibold text-foreground">user@lokalin.id</p>
            </div>
            <div className="grid gap-2">
              <p className="text-xs uppercase tracking-[0.24em] text-muted-foreground">Status</p>
              <p className="text-base font-semibold text-foreground">Akun Biasa</p>
            </div>
            <div className="grid gap-2 rounded-3xl border border-border bg-card p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Favorit UMKM</p>
                  <p className="text-sm text-muted-foreground">Kopi Nusantara, Batik Bandung, Dapur Ikan</p>
                </div>
                <Heart className="h-6 w-6 text-coral" />
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <Link to="/explore">
              <Button className="rounded-full bg-gradient-primary px-6 py-3 font-semibold text-primary-foreground hover:opacity-95">
                Jelajahi UMKM
              </Button>
            </Link>
            <Link to="/login" className="text-sm font-medium text-primary hover:underline">
              Ganti akun / Masuk lain
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Profile;
