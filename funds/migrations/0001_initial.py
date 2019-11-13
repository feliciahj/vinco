# Generated by Django 2.2.7 on 2019-11-13 18:35

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Region',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('region', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Structure',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('vehicle', models.CharField(max_length=50)),
            ],
        ),
        migrations.CreateModel(
            name='Style',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
            ],
        ),
        migrations.CreateModel(
            name='Fund',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('p_and_p', models.TextField(default='')),
                ('people', models.TextField(default='')),
                ('house', models.CharField(max_length=150)),
                ('sustainability_rating', models.IntegerField()),
                ('manager_diversity_rating', models.IntegerField()),
                ('alignment_rating', models.IntegerField()),
                ('inception_date', models.DateField()),
                ('fee', models.DecimalField(decimal_places=4, max_digits=5)),
                ('y_2018', models.DecimalField(decimal_places=4, max_digits=5)),
                ('y_2017', models.DecimalField(decimal_places=4, max_digits=5)),
                ('y_2016', models.DecimalField(decimal_places=4, max_digits=5)),
                ('y_2015', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('y_2014', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('y_2013', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('y_2012', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('y_2011', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('y_2010', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('y_2009', models.DecimalField(blank=True, decimal_places=4, max_digits=5, null=True)),
                ('stock_1', models.CharField(blank=True, max_length=100)),
                ('stock_2', models.CharField(blank=True, max_length=100)),
                ('stock_3', models.CharField(blank=True, max_length=100)),
                ('stock_4', models.CharField(blank=True, max_length=100)),
                ('stock_5', models.CharField(blank=True, max_length=100)),
                ('stock_6', models.CharField(blank=True, max_length=100)),
                ('stock_7', models.CharField(blank=True, max_length=100)),
                ('stock_8', models.CharField(blank=True, max_length=100)),
                ('stock_9', models.CharField(blank=True, max_length=100)),
                ('stock_10', models.CharField(blank=True, max_length=100)),
                ('region', models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='funds', to='funds.Region')),
                ('structure', models.ForeignKey(null=True, on_delete=django.db.models.deletion.DO_NOTHING, related_name='funds', to='funds.Structure')),
                ('styles', models.ManyToManyField(related_name='funds', to='funds.Style')),
            ],
        ),
    ]
